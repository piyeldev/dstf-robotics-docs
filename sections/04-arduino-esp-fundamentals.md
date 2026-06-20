# ♾️ Arduino and ESP32 Software Fundamentals
### Introduction
The robot is controlled by two microcontrollers:
- Arduino Uno – controls hardware such as motors, and sensors.
- ESP32-C3 SuperMini – controls the pumps, and establishes connection between the smartphone and robot through WiFi. 

Both boards can be programmed using the <a href="https://docs.arduino.cc/software/ide/">Arduino IDE</a>, and both use the same Arduino programming language based on C/C++. This means that most <u>code written for an Arduino Uno can also run on an ESP32</u> with little or no modification.

**Remember:** Programming a robot is simply giving instructions to the microcontroller so it can interact with the real world through its input and output pins

## Understanding the Structure of an Arduino Program
Every Arduino program contains two main functions:
```c
void setup() {

}

void loop() {

}
```
### setup()

Runs only once when the board powers on or resets.

Used for:
- Configuring pins
- Starting communication
- Initializing libraries

### loop()
Runs repeatedly forever.

Used for:
- Reading sensors
- Moving motors
- Controlling pumps
- Making decisions

## Variables
Variables store information. Names must have no spaces.
```c
int speed = 255;
bool pumpOn = false;
float batteryVoltage = 12.5;
```

Common variable types include:

Type|Example
----|-----
int |5    
float| 12.5
bool | true/false
char | 'A'
string| "Robot"

## Comments
Comments explain code and are ignored by the computer

Single-line comment
```c
// Turn on the pump
```

Multi-line comment
```c
/*
This code
controls
the motors
*/
```

Always comment important sections

## Digital Input and Output Pins
A microcontroller communicates with the outside world using pins.

Pins can be configured as:
- INPUT
- OUTPUT
- INPUT_PULLUP

using `pinMode()`

Example:
```c
const int pumpPin = 7;
const int sensorPin = 8;
void setup() {
    // set pump pin, as OUTPUT
    pinMode(pumpPin, OUTPUT)
    // set button pin as INPUT
    pinMode(sensorPin, INPUT)
}
```

This tells Arduino that Pin 7 will control a device, and Pin 8 will watch for input.

## Writing to a Pin
To write electricity to a Pin, use `digitalWrite()`
```c
void loop() {
    digitalWrite(pumpPin, HIGH)
}
```
Turns the pin ON.

```c
void loop() {
    digitalWrite(pumpPin, LOW)
}
```
Turns the pin OFF.

HIGH means the pin outputs voltage.

LOW means the pin outputs 0V (Ground).

### Example: Turning on a Pump
```c
const int pumpPin = 7;

void setup() {
    pinMode(pumpPin, OUTPUT);
}

void loop() {
    digitalWrite(pumpPin, HIGH);
    delay(3000);

    digitalWrite(pumpPin, LOW);
    delay(3000);
}
```
The pump runs for 3 seconds and stops for 3 seconds.

## Reading a Digital Input
Many sensors provide either:

- HIGH
- LOW

Use `digitalRead()`

```c
int value = digitalRead(2);
```

Example:
```c
const int sensorPin = 2;

void setup() {
    pinMode(sensorPin, INPUT)
}

void loop() {
    if (digitalRead(sensorPin) == HIGH) {
        Serial.println("Water Detected!")
    }
}
```

`digitalRead()` returns HIGH or LOW

## Using INPUT_PULLUP
Buttons often use INPUT_PULLUP.
```c
pinMode(buttonPin, INPUT_PULLUP)
```

When pressed:
```c
LOW
```

When released:
```c
HIGH
```

This avoids floating inputs and usually requires fewer components.

## Analog Inputs
Some sensors provide a range of values instead of just ON or OFF.

Use `analogRead()`

Example:
```c
int sensorvalue = analogRead(A1);
```
Possible values are `0-1023` for Arduino Uno. Most ESP32 models like the ones in the robot can go `0-4095`.

Another example:
```c
int waterLevel = analogRead(A0);

if (waterLevel > 500) {
    Serial.println("High Water Level")
}
```

## Serial Communication
This is used for debugging, meaning diagnosing and solving problems.

Start Serial:
```c
void setup() {
    Serial.begin(9600)
}
```

Send/Output Text:
```c
void setup() {
    Serial.println("Robot started!")
}
```

Send/Output Variables:
```c
int waterLevel = 650;
void loop() {
    // prints
    Serial.print("Level: ")
    // prints and add a new line after
    Serial.println(waterLevel)
}
```

This is one of the most useful tools when troubleshooting a robot.

## Using Functions
Functions prevent repeated code. Functions are like variables, but store repeated code, that you can call.

Without function:

```c
digitalWrite(pumpPin, HIGH);
delay(1000);
digitalWrite(pumpPin, LOW);
```

With function:

```c
void activatePump() {
    digitalWrite(pumpPin, HIGH);
    delay(1000);
    digitalWrite(pumpPin, LOW);
}
```

Then simply call:

```c
activatePump();
```

### Arguments
Arguments are values you can give to a function for it to use
```c
void name(argument) {
    Serial.println(argument)
}
```

## Controlling DC Motors

The robot uses four DC geared motors connected through an L293D Motor Driver Shield.

Motors cannot be connected directly to Arduino pins because they require more current than a microcontroller can provide.

Instead:

```text
Arduino → Motor Driver → Motor
```

The motor driver acts as a powerful switch.

Typical commands:

```c
motorForward();
motorBackward();
turnLeft();
turnRight();
stopMotors();
```

Later sections will tackle driving the DC motors programmatically.



## Controlling the Diaphragm Pump with a MOSFET

The diaphragm pump requires more current than an Arduino/ESP32 pin can supply.

Therefore a MOSFET is used.

Connection:

```text
Arduino Pin
      ↓
MOSFET
      ↓
Pump
```

Example:

```c
const int pumpPin = 7;

void setup() {
    pinMode(pumpPin, OUTPUT);
}

void loop() {
    digitalWrite(pumpPin, HIGH);
}
```

The Arduino/ESP controls only the MOSFET gate.

The MOSFET handles the larger pump current.



## Using Libraries

Libraries are collections of pre-written code.

Instead of writing everything yourself, you can use existing libraries.

Include a library:

```c
#include <Servo.h>
```

or

```c
#include <WiFi.h>
```

for ESP32.

Libraries save time and reduce programming errors.



## Understanding Objects

Many libraries use objects.

Example:

```c
WiFiClient client;
```

or

```c
Servo arm;
```

Think of an object as a programmable device with built-in functions.

Example:

```c
arm.write(90);
```

Moves the servo to 90 degrees.



## ESP32-Specific Features

The ESP32-C3 can do everything an Arduino can do, plus:

* Wi-Fi
* Bluetooth LE
* More memory
* Faster processor
* More advanced communication

Example:

```c
#include <WiFi.h>
```

```c
WiFi.begin("SSID", "PASSWORD");
```

The ESP32 is often used as the robot's communication controller while the Arduino handles real-time hardware control.



## Good Programming Practices

### Use Meaningful Names

Bad:

```c
int x = 5;
```

Good:

```c
int pumpControlPin = 5;
```



### Avoid Magic Numbers

Bad:

```c
digitalWrite(7, HIGH);
```

Good:

```c
const int pumpPin = 7;

digitalWrite(pumpPin, HIGH);
```



### Organize Code into Functions

Bad:

```c
100 lines inside loop()
```

Good:

```c
readSensors();
moveRobot();
controlPump();
```


### Debug Often

Use:

```c
Serial.println();
```

frequently while testing.

Most robotics problems are easier to solve when you can see what the microcontroller is thinking.


---

Proceed to the next sections if you now have an understanding of the fundamentals of the Arduino Language!