from urllib import response
from flask import Flask
import time
import atexit
from apscheduler.schedulers.background import BackgroundScheduler



# def print_date_time():
#     print(time.strftime("%A, %d. %B %Y %I:%M:%S %p"))

display=[]

def print_Hi():
    print("Hi")


scheduler = BackgroundScheduler()
scheduler.add_job(func=print_Hi, trigger="interval", minutes = 60)
scheduler.start()


# Shut down the scheduler when exiting the app
atexit.register(lambda: scheduler.shutdown())

app = Flask('backgroundScheduler')


@app.route('/scheduler',methods=['GET'])
def scheduleHi():
    display.append("Hi")
    return {"display": display}

@app.route('/python',methods=['GET'])
def bgSchduler():
    value= {"details":"Hi"}
    return value

@app.route('/py',methods=['GET'])
def newEffect():
    return {"details":"New Endpoint Says Hi"}

@app.route('/pyt',methods=['GET','POST'])
def newEffectPost():
    return {"detailing" : "This is post method!"}

if __name__ == '__main__':
    app.run()
   

