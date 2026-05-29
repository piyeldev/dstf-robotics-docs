# ⚙️ Parts
The following are the parts used to create this robotics project, with explanations and other information. You are free to use Google or any search engine to better understand the parts.

### Blue DC Geared Motor 
<img src="/assets/blue-dc-geared-motor.png" alt="dc geared motor" width="300" />
This is the motor used to drive the robot in the 4 directions (forward, backward, left, right). This motor features a <a href="/definition-of-terms#gearbox">gearbox</a>, which unlike a regular DC motor, has more strength or <a href="/definition-of-terms#torque">torque</a>, which means it can carry more weight without <a href="/definition-of-terms#stalling">stalling</a>. This blue variant features metal gears, which are unlike the typical yellow hobby motors.

**Specifications:**
- Color: Blue  
- Operating Voltage: 3V to 6V DC  
- Gear Ratio: 1:90  
- Gear Material: All Metal Gears  
- Output Shaft Type: Single Shaft

### Diaphragm Pump
<img src="/assets/diaphragm-pumps.png" alt="diaphragm pumps" width="300" />

This is a water pump, powered by a DC motor. It features two (2) holes, one for water in, and one for water out. The one in the robot was found inside an automatic water dispenser found in stores such as Grandiz, because these pumps were hard to find. We actually applied a higher voltage in these pumps, around 6-7V, as the operating voltage was too slow. This also came with drawbacks such as overheating, and loud noise.

**Specifications:**
- Voltage: 3-4.5V
- Current: 3V 650mA, 3.7V 750mA
- Power: 3-6W
- Lift: 1.5m
- Size: 80x31x24mm
- Import and export inner diameter: 4mm
- Import and export outer diameter: 7mm

### 18650 3.7V Li-ion Battery
<img src="/assets/18650-battery.png" alt="18650 battery" width="300" />

Used to power the robot overall. Unlike a regular AA battery, this battery is much larger and features a higher voltage (AA: 1.5V vs 18650: 3.7V), and a higher capacity, depending on the variant (in our case, 2200mAh). We used two batteries, and wired it in parallel to double the voltage, but kept the capacity the same.

**Specifications:**
- Battery Type: ICR 18650 3.7V 2200mAh Li-ion Rechargeable Battery  
- Model: ICR18650 3.7VLi-ion Battery  
- Voltage: 3.7V  
- Storage Voltage: 3.7-3.9V  
- Charging Cut-off Voltage: 4.2V  
- Discharge Cut-off Voltage: 3.0V  
- Capacity: 2200mAh  
- Size: 18.5x65.2mm  
- Protected: NO  
- Battery top: Flat top  
- Max Constant Charging Current: 2200mA(1C)  
- Max Constant Discharging Current: 4400mA(2C)  
- Material: Lithium Li-ion ICR  
- Recharging cycles: At least 500cycles

### ESP32 C3-Supermini
<img src="/assets/esp32-c3-supermini.png" alt="esp32 c3 super mini" width="300" />

This is the <a>microcontroller</a> that facilitates communications between phone and the robot. This board features WiFi and Bluetooth capabilities, meaning you can send and receive informations through those protocols. This also features pinouts (the one on the sides of the board), where you can send and receive information to and from hardware. To program this board, you need to use a USB type-C cable, and connect it to a computer or laptop with Arduino IDE.

**Specifications:**  
- Microcontroller: Espressif ESP32-C3 (RISC-V 32-bit single-core, up to 160 MHz)  
- Wireless Connectivity:  
	A. Wi-Fi: 802.11 b/g/n (2.4 GHz)  
	B. Bluetooth: Bluetooth Low Energy (BLE) 5.0  
- Flash Memory: 4MB  
- SRAM: 400 KB  
- Peripherals: Multiple GPIO pins (number varies by specific board, typically 22-30), ADC, DAC, I2C, SPI, UART, PWM, I2S, RMT, etc.  
- Power Input: 5V DC via USB-C port or VIN pin  
- Operating Voltage: 3.3V  

### Arduino Uno R3
<img src="/assets/arduino-uno.png" alt="arduino uno" width="300" />

This is the main microcontroller that controls everything. This is slightly the same as the ESP32 in terms of capabilities, but it featues a bigger form factor, more pinouts (the blacks on the side), and more hardware capabilities. But unlike the ESP32, it doesn't feature any wireless connectivity, that's why we used an ESP32 together with it. To program this board, we use a USB type-B to type-A connector, and connect it to our computer that has Arduino IDE installed.

**Specifications:**
- Microcontroller: DIP ATmega328  
- Operating Voltage: 5V  
- Dual Inline Package  
- Input Voltage (recommended): 7-9V  
- Digital I/O Pins: 14 (of which 6 provide PWM output)  
- Analog Input Pins: 6  
- DC Current per I/O Pin: 40 mA  
- DC Current for 3.3V Pin: 50 mA  
- Flash Memory:32 KB (ATmega328) of which 0.5 KB used by the bootloader  
- SRAM: 2 KB (ATmega328)  
- EEPROM: 1 KB (ATmega328)  
- Clock Speed: 16 MHz

### L293D Motor Driver Shield
<img src="/assets/l293d-motor-driver.png" alt="18650 batteries" width="300" />

This is the board that facilitates communication between Arduino and the motors, and regulates them. This board is inserted as a "shield" in the Arduino, like a sandwich. This board has also been known to be inefficient as the motors lose voltage, because of its old and unupdated design; but it does its work. It features four terminals (light blue left and right), for four motors or two terminals, for two stepper motors, and two terminals for two servos (in the upper left corner). 

**Features :**
- 2 interface for 5V Servo
- Can drive 4 DC motors or 2 stepper motors or 2 Servo
- Up to 4 bi-directional DC motors with individual 8-bit speed selection
- Up to 2 stepper motors (unipolar or bipolar) with single coil, double coil or interleaved stepping.
- 4 H-Bridges: per bridge provides 0.6A (1.2A peak current) with thermal protection, can run motors on 4.5V to 36V DC
- Pull down resistors keep motors disabled during power-up
- Reset button
- 2 external terminal power interface, for separate logic/motor supplies

### F5305s Power <a>MOSFET</a>
<img src="/assets/f5305s-power-mosfet.png" alt="f5305s power mosfet" width="300" />

This is the part that is used to switch the two diaphraghm pumps on or off. This works by using two terminals (+ and -), for controlling the on or off state, and another two terminals (+ and -), to supply electricity. This was used because the pump needed more voltage and current, more than what the microcontrollers can provide (microcontroller: 3V or 5V, needed: 6V-7V).

### Red Water Sensor
<img src="/assets/red-water-sensor.jpg" alt="f5305s power mosfet" width="300" />
A sensor that detects water level and outputs them to electricity, ranging from 0 to 3-5V. Has 3 pinouts; + and - for power supply (3-5V) and S for analog output signal, to be used by a microcontroller.

### 18650 Battery Holder
<img src="/assets/battery-holder.png" alt="f5305s power mosfet" width="300" />
From the name itself, battery holder, specifically for the 18650 batteries. This is just a battery holder, and the battery terminals are not pre-connected, so that you can decide to wire in <a href="/definition-of-terms#parallel-circuit">parallel</a>, or in <a href="/definition-of-terms#series-circuit">series</a>.

### Rocker Switch
<img src="/assets/rocker-switch.jpg" alt="f5305s power mosfet" width="300" />
This is a switch. It has two terminals, + and -, and turning it on, connects the two terminals. 


<br />
<br />
You can read this page again to gain for more clarity. If you're done, it's time to go to the next page!
