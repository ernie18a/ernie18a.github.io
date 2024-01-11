import time
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/countdown')
def countdown():
    # Get countdown target time from user input (optional)
    target_time = time.time() + 60  # Example: countdown for 60 seconds
    time_left = target_time - time.time()
    return str(int(time_left))  # Return remaining seconds as text

# Example alarm clock implementation using a simple loop
@app.route('/set_alarm')
def set_alarm():
    alarm_time = time.strptime(request.args.get('alarm_time'), '%H:%M')
    while True:
        current_time = time.localtime()
        if current_time.tm_hour == alarm_time.tm_hour and current_time.tm_min == alarm_time.tm_min:
            print("Alarm!")  # Replace with actual alarm actions
            break
        time.sleep(1)
    return "Alarm set"

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
