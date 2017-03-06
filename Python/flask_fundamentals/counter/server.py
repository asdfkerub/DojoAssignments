from flask import Flask, render_template, session , redirect
import random
app = Flask(__name__)
app.secret_key = "kerub"

@app.route('/')
def index():
    num = round(random.randint(0,2))
    print num
    if "count" not in session:
        session['count'] = 0
    if num == 1:
        session['count'] += 1
        return redirect('/ninja')
    elif num == 2:
        session['count'] += 1
        return redirect('/hacker')
    else:
        session['count'] += 1
        return render_template('index.html')
    #return render_template('index.html')
@app.route('/ninja')
def ninja():
    return render_template('ninja.html')
@app.route('/ninjaproc')
def ninjaproc():
    session['count'] = session['count'] + 1
    return redirect('/')
@app.route('/hacker')
def hacker():
    return render_template('hacker.html')
@app.route('/hackerproc')
def hackerproc():
    session['count'] = 0
    return redirect('/')

app.run(debug=True)
