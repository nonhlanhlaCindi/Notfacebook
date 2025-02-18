import time  # Import time explicitly
from flask import Flask, render_template, request, redirect, url_for, session  # type: ignore
from werkzeug.security import generate_password_hash, check_password_hash  # type: ignore
from database import get_db_connection  # Ensure your database connection is correct

app = Flask(__name__)
app.secret_key = 'your_secret_key'  # Make sure this is a secure key

# Splash route, which redirects to signup after 3 seconds
@app.route('/')
def splash():
    # Check if the splash page has already been shown in the session
    if 'splash_shown' in session:
        return redirect(url_for('signup'))  # Skip splash and redirect to signup
    else:
        session['splash_shown'] = True  # Mark splash page as shown
        time.sleep(3)  # Wait for 3 seconds before redirecting
        return redirect(url_for('signup'))  # Redirect to signup page after splash

# Signup route with both GET and POST handling
@app.route('/signup', methods=['GET', 'POST'])
def signup():
    if request.method == 'POST':
        username = request.form['username']
        email = request.form['email']
        cellphone = request.form['cellphone']
        password = request.form['password']
        confirm_password = request.form['confirmPassword']

        # Check if passwords match
        if password != confirm_password:
            return "Passwords do not match!"
        
        # Check if email is already registered
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM users WHERE email = %s", (email,))
        existing_user = cursor.fetchone()
        if existing_user:
            cursor.close()
            conn.close()
            return "Email already registered!"
        
        # Hash the password if the email is not taken and passwords match
        hashed_password = generate_password_hash(password, method='pbkdf2:sha256')

        # Store in the database
        cursor.execute("""
            INSERT INTO users (username, email, password, cellphone)
            VALUES (%s, %s, %s, %s)
        """, (username, email, hashed_password, cellphone))
        conn.commit()

        cursor.close()
        conn.close()

        # Redirect to the login page after successful signup
        return redirect(url_for('signin'))

    # Render the signup page for GET requests
    return render_template('signup.html')

# Signin route with authentication
@app.route('/signin', methods=['GET', 'POST'])
def signin():
    if request.method == 'POST':
        email = request.form['email']
        password = request.form['password']

        # Check if email exists in the database
        conn = get_db_connection()
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM users WHERE email = %s", (email,))
        user = cursor.fetchone()
        cursor.close()
        conn.close()

  # Redirect to a dashboard page
 # Redirect to a dashboard page
        if user and check_password_hash(user[3], password):  # user[3] is the password column
            session['user_id'] = user[0]  # Storing user ID in the session
            return redirect(url_for('dashboard'))  
        else:
            return "Invalid email or password"

    return render_template('signin.html')

# Example Dashboard route after login (optional)
 # Redirect to signin if not logged in
@app.route('/dashboard')
def dashboard():
    if 'user_id' not in session:
        return redirect(url_for('signin'))  # Redirect to signin if not logged in

    return render_template('notfacebook.html')



# Redirect to profile page if not logged in
@app.route('/profile')
def profile():
    if 'user_id' not in session:
        return redirect(url_for('signin'))  

    return render_template('profile.html')


 # Redirect to messages page if not logged in
@app.route('/messages')
def messages():
    if 'user_id' not in session:
        return redirect(url_for('signin')) 

    return render_template('messages.html')

if __name__ == '__main__':
    app.run(debug=True)
