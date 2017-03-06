from flask import Flask, render_template, session, redirect, request
import random
app = Flask(__name__)
app.secret_key = 'kerub'
@app.route('/')
def index():
    if "number" not in session:
        session['number'] = random.randrange(1,101)
    return render_template('index.html')
@app.route('/process',methods=['POST'])
def proc():
    the_n = request.form['the_num']
    the_g = request.form['guess_num']
    if the_g > the_n:
        session['status'] = 1
    elif the_g < the_n:
        session['status'] = 2
    elif the_g == the_n :
        session['status'] = 3
    else:
        session['status'] = 0
    print the_n
    print the_g
    return redirect('/')
@app.route('/gen',methods=['GET'])
def gen():
    session.pop('number')
    session['number'] = random.randrange(1,101)
    session['status'] = 0
    print session['status']
    return redirect('/')

app.run(debug = True)
