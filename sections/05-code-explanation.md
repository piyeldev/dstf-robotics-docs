# 💻 Code Explanation
On this page, you will learn the software that make this project run. From the robot's movement to communication between the phone and robot. Let's go!

## Arduino Uno Code
If you'd like spoilers, the following is the complete code that lives inside the Arduino Uno board. 

<details>
<summary> Click to view </summary>

```c
#include <Servo.h>
#include <AFMotor.h>
#include <SoftwareSerial.h>

#define waterSensorContainer A2

AF_DCMotor motorL1(1);
AF_DCMotor motorL2(2);
AF_DCMotor motorR1(4);
AF_DCMotor motorR2(3);

Servo irrigatorServo;
SoftwareSerial ESP32Serial(A5, 13);

int pos = 0;
char latestMotorComm = 'O';

void setup() {
  // put your code here, to run once
  Serial.begin(9600);
  ESP32Serial.begin(9600);

  motorL1.setSpeed(255);
  motorL2.setSpeed(255);
  motorR1.setSpeed(255);
  motorR2.setSpeed(255);

  irrigatorServo.attach(9);
}

void loop() {
  // put your main code here, to run repeatedly:
  char comm = handleCommsReceive();

  if (comm) {
    latestMotorComm = comm;   // update last command
    Serial.print("Got command: ");
    Serial.println(comm);
  }

  motorChore(latestMotorComm);

  // Serial.println(latestMotorComm); // comment/uncomment for debugging
  senseWaterLevel(waterSensorContainer);
  
  // autoServo(); // moves servo automatically
}

void autoServo() {
  // sweeps from 0 degrees to 180 degrees (real physical degrees measurement might be lower due to limitations)
	for(pos = 0; pos <= 180; pos += 1) 
	{
		irrigatorServo.write(pos);
		delay(15);
	}
	// sweeps from 180 degrees to 0 degrees
	for(pos = 180; pos>=0; pos-=1)
	{
		irrigatorServo.write(pos);
		delay(15);
	}
}

char handleCommsReceive() {
  if (ESP32Serial.available()) {
    char rx = (char)ESP32Serial.read();
    return rx;
  }
  return 0; // return 0 if nothing
}
int senseWaterLevel(uint8_t water_sensor_pin) {
  int water_sensor_readings = analogRead(water_sensor_pin);
  int level_percent = map(water_sensor_readings, 0, 1023, 0, 100);
  // Serial.println(water_sensor_readings); // for debugging
  return level_percent;
}

void motorChore(char comm) {
  if (comm == 'F') {
    // Serial.println("FWD");
    motorL1.run(FORWARD);
    motorL2.run(FORWARD);
    motorR1.run(FORWARD);
    motorR2.run(FORWARD);
  } 
  else if (comm == 'B') {
    // Serial.println("BWD");
    motorL1.run(BACKWARD);
    motorL2.run(BACKWARD);
    motorR1.run(BACKWARD);
    motorR2.run(BACKWARD);
  }
  else if (comm == 'L') {
    // Serial.println("LFT");
    motorL1.run(BACKWARD);
    motorL2.run(BACKWARD);
    motorR1.run(FORWARD);
    motorR2.run(FORWARD);
  }
  else if (comm == 'R') {
    // Serial.println("RYT");
    motorL1.run(FORWARD);
    motorL2.run(FORWARD);
    motorR1.run(BACKWARD);
    motorR2.run(BACKWARD);
  } else if (comm == 'O') {
    // Serial.println("STOP");
    motorL1.run(RELEASE);
    motorL2.run(RELEASE);
    motorR1.run(RELEASE);
    motorR2.run(RELEASE);
  }
}


```
</details>

### Breakdown

#### Importing Libraries
```c
#include <Servo.h>
#include <AFMotor.h>
#include <SoftwareSerial.h>
```
Here, we are importing the libraries, so that we can use it in our code. By including these lines of code in our program, we are saying to Arduino "I want to use the library's variables, functions, classes in my code". So in these first four lines, we are importing the Servo, Motor Driver (AFMotor means AdaFruit Motor), and Software Serial libraries, so that we can control the corresponding hardware the library is for.

#### Defining Variables
```c
#define waterSensorContainer A2
```
`#define` is used when you want to declare a variable that is non-changeable. It essentially works as a "read-only" variable, that replaces the text (name of variable) with the corresponding value they are assigned to, in pre-compilation time (a split second before the code is compiled, and then ran). 

In this line, the `#define waterSensorContainer A2` replaces "waterSensorContainer" into A2 anywhere which it is written in the code. Essentially like "Find and Replace" when you talk about Microsoft Word or Google Docs.

#### Declaring Objects
```c
AF_DCMotor motorL1(1);
AF_DCMotor motorL2(2);
AF_DCMotor motorR1(4);
AF_DCMotor motorR2(3);

Servo irrigatorServo;
SoftwareSerial ESP32Serial(A5, 13);
```
In these lines of code first 4 lines here, we are declaring the objects, which are `AF_DCMotor` objects, which refer to the DC Motors attached in the L293D Motor Driver Shield. This will help us later when we want to drive the motors, backward or forward, or change the speed.

In the rest of the lines here, we are declaring a Servo object named irrigatorServo, and a SoftwareSerial Object, which is named ESP32Serial(A5, 13), which is used to control the Servo, hence the name, and send receive information, respectively. 

In the `ESP32Serial(A5, 13)` the A5, and 13, refer to the pins in the arduino. A5 pin is used to receive information (RX), and 13, is used to send/transmit information (TX).

#### Declaring Variables
```c
int pos = 0;
char latestMotorComm = 'O';
```


<!-- TODO 1: Create breakdown of arduino uno code -->
<!-- TODO 2: paste ESP32 code -->