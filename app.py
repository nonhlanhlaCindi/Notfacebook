import time 
from flask import Flask, render_template, request, redirect, url_for, session
from werkzeug.security import generate_password_hash, check_password_hash 
from database import get_db_connection 

app = Flask(__name__)
app.secret_key = 'your_secret_key' 


@app.route('/')
def splash():
   
    if 'splash_shown' in session:
        return redirect(url_for('signup'))
    else:
        time.sleep(3) 
        return redirect(url_for('signup'))  


@app.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        username = request.form['username']
        email = request.form['email']
        cellphone = request.form['cellphone']
        password = request.form['password']
        confirm_password = request.form['confirmPassword']

    
        if password != confirm_password:
            return "Passwords do not match!"
        
     
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM users WHERE email = %s", (email,))
        existing_user = cursor.fetchone()
        if existing_user:
            cursor.close()
            conn.close()
            return "Email already registered!"
       
        hashed_password = generate_password_hash(password, method='pbkdf2:sha256')

       
        cursor.execute("""
            INSERT INTO users (username, email, password, cellphone)
            VALUES (%s, %s, %s, %s)
        """, (username, email, hashed_password, cellphone))
        conn.commit()

        cursor.close()
        conn.close()

    
        return redirect(url_for('signin'))

   
    return render_template('signup.html')


@app.route('/signin', methods=['GET', 'POST'])
def signin():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']

    
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM users WHERE email = %s", (email,))
        user = cursor.fetchone()
        cursor.close()
        conn.close()

        if user and check_password_hash(user[3], password): 
            session['user_id'] = user[0]  
            return redirect(url_for('notfacebook'))
        else:
            return "Invalid email or password"

    return render_template('signin.html')


@app.route('/notfacebook')
def notfacebook():
    if 'user_id' not in session:
        return redirect(url_for('signin')) 

    return render_template('notfacebook.html')


@app.route('/messages')
def messages():
    if 'user_id' not in session:
        return redirect(url_for('signin'))

    return render_template('messages.html', messages=messages)

@app.route('/profile')
def profile():
    if 'user_id' not in session:
        return redirect(url_for('signin'))

    return render_template('profile.html')

if __name__ == '__main__':
    app.run(debug=True)
