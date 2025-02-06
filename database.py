import psycopg2

def get_db_connection():
    conn = psycopg2.connect(
        dbname="notfacebook",
        user="postgres",  
        password="your_password",  
        host="localhost",
        port="5432",
    )
    return conn
