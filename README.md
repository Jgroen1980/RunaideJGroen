# Eindopdracht Jaap Groen
Full Stack Web Application<br/>
hardloop coaching applicatie: Runaide

## Setup back-end applicatie

####1 Download de applicatie van Github

Als u de applicatie nog niet tot uw beschikking heeft kunt u deze verkrijgen vie de volgende link:
```bash
https://github.com/hogeschoolnovi/eindopdracht-jaap-groen.git
```
<br/>

####2 Gebruik Database van H2

Geen actie nodig, de applicatie gebruikt een H2 in-memory database.

####3 Start de applicatie server en in-memory database

Ga in de terminal naar de hoofd-map van deze eindopdracht (eindopdracht-jaap-groen). <br/>

Voer de volgende code uit op de terminal om de back-end te laten draaien:
```bash
mvn spring-boot:run
```
De back-end start in poort 8080.<br/>
In de browser te bereiken:<br/> http://localhost:8080/h2

#Setup front-end in React

####1 Ga in de terminal naar de "frontend" folder die in de hoofdfolder (eindopdracht-jaap-groen) staat.
om de nodige dependencys van npm te gebruiken voer het volgende in de terminal uit:
````bash
npm install
````
<br />

om de apllicatie te starten voert u in dezelfde folder "frontend" de volgende command uit in de terminal
````bash
npm start
````

De frontend start in poort 3000.
In de browser te bereiken:<br/>
http://localhost:3000/

#Gebruikte technieken

* Java
* Javascript
* React
* HTML
* CSS/CSS3/Sass
