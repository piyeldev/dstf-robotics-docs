```c
#include <avr/io.h>
#include <Servo.h>
#include <AFMotor.h>
#include <SoftwareSerial.h>
#include <string.h>

#define MOTOR34_8KHZ _BV(CS01)
#define DC_MOTOR_PWM_RATE MOTOR34_8KHZ
#define waterSensorContainer A2
#define batLvlLogic A3
#define batLvlMotors A4

AF_DCMotor motorL1(1);
AF_DCMotor motorL2(2);
AF_DCMotor motorR1(4);
AF_DCMotor motorR2(3);

Servo irrigatorServo;
SoftwareSerial ESP32Serial(A5, 13);

int pos = 0;

char latestMotorComm = 'O';
unsigned long prevMillis = 0;
const unsigned long interval = 1000;
```

