# 🎯 Objectives
To better understand the project, it is important to know why it was created, what it is designed to do, and the challenges and limitations encountered during development. This page explains these aspects to help future contestants better learn from and improve the project.

## Why was it created?

As mentioned on the welcome page, this project was created to address the problem of stagnant water around the SHS and JHS building grounds. The idea started when the contestants were walking around the campus and thinking of a possible concept for the competition. During that discussion, one of the classmates suggested building a robot that could collect stagnant water after heavy rains. This would help students use the wider open grounds for passing through instead of crowded hallways, where large groups of students often gather during rainy days.

Another reason for creating the project was the concern that stagnant water remains on the grounds for a long period of time. This can become a breeding ground for mosquitoes, which may spread diseases such as malaria and dengue. This problem becomes more noticeable during the wet season in the Philippines, when continuous rainfall often causes flooding and disruptions in schools.

The robot is not limited to collecting stagnant water or small floods around the SHS and JHS buildings. One of the contestants also suggested that it could be used for cleaning liquid spills inside classrooms or offices. By simply calling the robot to the area, spills can be cleaned more quickly and conveniently. 

Another suggestion is also to use the collected stagnant water in the grounds as water on ornamental plants (strictly) that are unrained-on or sheltered, to save water. This will later be the basis into why it was named "BloomBot".

## What is it designed to do?

As also mentioned on the welcome page, it is designed to collect stagnant waters after heavy rainfalls. 

Through the use of WiFi and a developed app, the user can control the robot from a distance, especially if there is a presence of shallow flood waters. The robot then collects water through a diaphragm pump, then stores it into a small container. The robot can then travel to a chosen distance and pour its stores into a container, or on ornamental plants, using a custom made sprinkler that can tilt 180°.

The robot is also designed to check the container's water levels if it's nearly full, then automatically turn off the pump to prevent overflowing.

## Challenges and Limitations

Although we had many plans for the robot, including: 

1. A dedicated wiper for spills
2. Fast differential steering (steering in place)
3. 180° tilting of sprinkler
4. Good UI/UX mobile app

We also faced different challenges, and limitations.
#### 1. Time constraint
Time was limited during the day we created the robot, which was only less than 30 days. This was the majority of the reason why some of the plans for the robot have failed or not started.

#### 2. Costliness
Budget constraints was also a limitation for this project. Robotics is costly, so we chose not to add functionality and fix some issues, and removed them instead.

#### 3. Bad design decisions that are costly and time-consuming to reverse
Related to the differential steering feature, the bad design decision for the mounting plane (the thick plywood) where the parts are placed, is too long for differential steering to work properly, that's why steering of the robot is so slow, and inefficient. 

#### 4. Irreversible damages
Related to the 180° tilting of the sprinkler in the robot, while testing, we accidentally shorted the little IC inside the servo motor by reversing its polarity or supplying too much current. This made the servo motor stop working, and creating a burnt smell when attached again. 


With enough time and budget, the project can push its way to completion and efficiency. If you are interested in knowing the technicalities of the robot, you may now proceed to the ["Sections"](/sections/01-system-architecture) part of this documentation.
