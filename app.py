from flask import Flask, render_template, request, redirect, url_for, session # type: ignore
from werkzeug.security import generate_password_hash, check_password_hash # type: ignore
from database import get_db_connection

app = Flask(__name__)
app.secret_key = 'your_secret_key'  



@app.route('/')
def splash():
    return render_template('index.html')

if __name__ == '__main__':
    app.run(debug=True)
