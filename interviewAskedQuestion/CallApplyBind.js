function SaySomething(greet, punchLine) {
    if (this.yourName) {
        console.log(`${greet}, My name is ${this.yourName}, ${punchLine}`);
    } else {
        console.log(`Sorry, this time only ${punchLine}`);
    }
}

// SaySomething.call({ yourName: "jay" }, "Hello", "I have no PunchLine");

// SaySomething.apply({ yourName: "jay" }, ["Hello", "I have no PunchLine"]);

// Above two method are immidiately invoked 

const greetAlice = SaySomething.bind({yourName: "Jay"}, 'Hey', "Koi punchLine nahi hai");
greetAlice(); 

// Bind method can use Latter It is not immidiately invoked.