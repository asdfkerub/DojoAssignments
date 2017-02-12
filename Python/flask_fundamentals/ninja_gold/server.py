from flask import Flask, render_template, redirect, session, request
import random, time
app = Flask(__name__)
app.secret_key = 'kerub'
@app.route('/')
def index():
    #session.pop('count')
    #session.pop('log')
    #session.pop('gold')
    if "gold" not in session:
        session['gold'] = 0
    if "log" not in session:
        session['log'] = []
    if 'count' not in session:
        session['count'] = 0
    return render_template('index.html')
@app.route('/process_money',methods=["POST"])
def gold():
    #session['count'] = len(session['log'])
    if request.form["building"] == "farm":
        earnedf = random.randrange(9,21)
        session['gold'] += earnedf
        txt = ['Earned ' + str(earnedf) + ' golds from the farm! (' + time.strftime("%x") + " " + time.strftime("%X") + ')' , 'green']
        session['log'].insert(0,txt)
        session['count'] = len(session['log'])
    elif request.form['building'] == "cave":
        earnedcave = random.randrange(4,11)
        session['gold'] += earnedcave
        txt = ['Earned ' + str(earnedcave) + ' golds from the cave! (' + time.strftime("%x") + " " + time.strftime("%X") + ')' , 'green']
        session['log'].insert(0,txt)
        session['count'] = len(session['log'])
    elif request.form['building'] == "house":
        earnedh = random.randrange(1,6)
        session['gold'] += earnedh
        txt = ['Earned ' + str(earnedh) + ' golds from the house! (' + time.strftime("%x") + " " + time.strftime("%X") + ')' , 'green']
        session['log'].insert(0,txt)
        session['count'] = len(session['log'])
    else:
        gamble = random.randint(0,1)
        earnedcasino = random.randrange(0,51)
        #print gamble
        if gamble == 1:
            session['gold']+= earnedcasino
            txt = ['Earned ' + str(earnedcasino) + ' golds from the casino! (' + time.strftime("%x") + " " + time.strftime("%X") + ')' , 'green']
            session['log'].insert(0,txt)
            session['count'] = len(session['log'])
        else:
            session['gold']-= earnedcasino
            txt = ['Lost ' + str(earnedcasino) + ' golds from the casino! (' + time.strftime("%x") + " " + time.strftime("%X") + ')' , 'red']
            session['log'].insert(0,txt)
            session['count'] = len(session['log'])
    return redirect('/')
app.run(debug = True)
