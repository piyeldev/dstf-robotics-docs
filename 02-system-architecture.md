

# 🔨 System Architecture
To get an overview on how the parts work together, let us study the block diagrams below.

## Control Block Diagram
![control block diagram](/assets/control_block_diagram.png)

The control logic starts when the android app triggered a command in the ESP32 through WiFi. This specific command is then processed, and the ESP32 will then determine which action to trigger. 

For example, when the command for turning on the diaphragm pumps is triggered, the ESP32 turns on the diaphragm pumps through the F5305S Power MOSFET through the ESP32's <a>GPIO</a> (the pins on the side of microcontroller, see <a>image</a>).

Another example, if the command for moving the robot is triggered, the ESP32 then communicates with the Arduino Uno through <a>Serial Communication</a>. Then the arduino executes that specific command to the L293D motor driver shield through its GPIOs. Then the L293D Motor driver shield will drive the servo motor, or the DC Geared Motors, depending on the command.

## Power Distribution Block Diagram
![power distribution block diagram](/assets/power_distribution_block_diagram.png)

The power distribution of the robot is explained in this diagram. First, everything comes from the 18650 batteries. This is a 2S battery pack, meaning 2 batteries in a series (nominal 7.4V 2200mAh). 

The F5305S Power MOSFETs are powered by the battery through the MOSFET's power terminals. 

The L293D Motor Drive Shield is powered through the VIN terminal in the shield. The Arduino Uno is then powered by the shield through its VIN. And lastly, the ESP32 is powered by the Arduino Uno, through its 5V pin.

<br />
<br />
Now that you have learned the system's architecture, let's move on to the wiring diagram to learn how are the parts physically connected, and how to assemble them. 