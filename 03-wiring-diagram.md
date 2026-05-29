# 🔌 Wiring Diagram and Assembly

In this page, we will learn how are the parts wired together, and how to assemble them. 

Let's start with the overall view of how the robot is wired together.

### Overall
![wiring diagram](/assets/wiring_diagram.png)

****some parts may not reflect the real ones. This is for illustration purposes only.*

It is all centered to the ESP32. The ESP32 is the one facilitating communication between the phone through WiFi, and sending commands to the arduino and its motor drive shield, and the F5305S Power MOSFETs.

You can see that its pretty messy. But it will all make sense once we tackle it in groups of parts. 

Let's start with the Arduino Uno, its L293D motor driver shield.

### Arduino Uno and L293D Motor Driver Shield
<img src="/assets/arduino-and-driver.png" alt="Arduino and Motor Driver Shield and Parts" width="500" /> 

Starting with the arduino, you can immediately notice that you can't see the arduino itself in this image. This is because a motor driver shield is attached on top of it. Moving on to the motor driver shield's screw terminals (the green ones, that has 5 terminals each), you can see that it is divided into 4 pairs: M1, M2, M3, M4 (except for the ones in the center). Each pair can drive a DC motor, and 2 pairs can drive a stepper motor. 

To connect a DC motor to a terminal, solder a wire into the dc motors terminals, and connect it to the shield's terminals. The <a>polarity</a> is not important, as long as all motors have the same positioning of wires, and that the FORWARD command in the code (we will get into later) correctly moves the motors forward. 

To connect a servo motor, use the SERVO terminals (bottom left corner). Make sure to identify the wires correctly as wrong connection can damage the servo motor. 

For more information about the L293D Motor driver and how to use it, you may refer to <a href="https://lastminuteengineers.com/l293d-motor-driver-shield-arduino-tutorial/" target="_blank">this guide</a>.


### ESP32 and Arduino
<img src="/assets/esp_and_arduino.png" alt="ESP and Arduino" width="500" /> 

This part is where we see the connections between the Arduino Uno and the ESP32. For your reference, you may see the pinout labels in the image below.

First, the ESP32 is powered from the arduino's 5V. If you're confused why it is wired into the shield instead, that's because the arduino uno at the bottom of the shield provides the current for the 5V lines in the shield. Grounding is also provided through the arduino's GND pinout, connected to the ESP32's GND pinout.

Lastly, is the connection between the TX pinout of the ESP32 and the A5 pinout of the arduino uno. Looking at the pink wire's connection, you can see that it is still connected to the shield's lines. That's because that row in the shield is connected to the analog pinouts of the arduino at the bottom. Starting at the right most (relative to the horizontal positioning of the shield) is the A5, then to the left, is A0. This connection is one of the most important as this facilitates the communication between the Arduino Uno and ESP32, which will drive the motors to move the robot.

<img src="/assets/esp32_pinout.png" alt="ESP32 C3 SuperMini Pinout" width="500" /> 

### Power Supply, ESP32 and MOSFET
<img src="/assets/power_supply-and-esp_connection_to_mosfet.png" alt="ESP and Arduino" width="500" /> 

Starting from the Power Supply connection, the battery's positive and negative terminals is connected --- each with a separate line, to the F5305S power MOSFET's DC+ and DC- (see f5305s reference image below). This is because the pumps need more current than what the microcontrollers can provide, which may lead to being underpowered and slow. Then another line is provided to power both the microcontrollers through the L293D motor driver shield's VIN. 

Next, is the connection between the F5305S and ESP32. From the image above, you can see that the first MOSFET is connected to the GPIO4 of the ESP32 (orange wire) from it's SIGNAL terminal, and the other one is connected to the GPIO3 of the same microcontroller (blue wire) from the same terminal in the MOSFET. These are important as the ESP32 switches the MOSFETs on and off through these wires, by using code (more on that in later sections).

Lastly, the F5305S Power MOSFET's OUT+ and OUT- is connected to the pumps. This completes the wiring for the irrigation system.

<img src="/assets/f5305s.png" alt="ESP and Arduino" width="500" /> 

The guide above makes sure that you now know how to assemble the robot from the ground up. If that's not the case, read the guide again. And if you're read, we can now move on to the next section!