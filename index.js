#!/usr/bin/env node
// it tells the OS to execute the code with the node js version installed in the local system

// chalk -> colors the output text in the terminal

import chalk from 'chalk';
import inquirer from 'inquirer';
import gradient from 'gradient-string';
import chalkAnimation from 'chalk-animation';
import figlet from 'figlet';
import {createSpinner} from 'nanospinner';

async function handleAns(isCorrect){
    const spinner=createSpinner('Checking answer...').start();
    await sleep();
    if(isCorrect){
        spinner.success({text:`Correct Answer ${playerName}`});
    }else{
        spinner.error({text:`Wrong answer ${playerName} 💀💀`});
        process.exit(1);
    }
}

let playerName;
const sleep=(ms=2000)=> new Promise((r)=>setTimeout(r,ms));
const sleep1=(ms=500)=> new Promise((r)=>setTimeout(r,ms));

async function welcome(){
    const rainbowTitle=chalkAnimation.rainbow('Play this Awesome Football Trivia!! \n');
    await sleep();
    rainbowTitle.stop();
    console.log(`
    ${chalk.blue('HOW TO PLAY')}
    I am alive inside your computer.
    If you get any question wrong I will be ${chalk.red('KILLED')}.
    If you get all correct You get a gift.
    `)
}
await welcome();

async function askName(){
    const answers=await inquirer.prompt({
        name:'player_name',
        type:'input',
        message:'What is your name?',
        default(){
            return 'Player';
        },
    });
    playerName=answers.player_name;
}
await askName();
await sleep();
async function question1(){
    const answers=await inquirer.prompt({
        name:'question_1',
        type:'list',
        message:'Which club is associated with "Galacticos"? \n',
        choices:[
            'Liverpool',
            'Barcelona',
            'Atletico Madrid',
            'Real Madrid',
        ],
    });
    return handleAns(answers.question_1=='Real Madrid')
}


await question1();
await sleep1();
async function question2(){
    const answers=await inquirer.prompt({
        name:'question_2',
        type:'list',
        message:'"You will never walk alone" is the anthem of which english club? \n',
        choices:[
            'Chelsea',
            'Newcastle United',
            'Liverpool',
            'Manchester United',
        ],
    });
    return handleAns(answers.question_2=='Liverpool')
}


await question2();
await sleep1();
async function question3(){
    const answers=await inquirer.prompt({
        name:'question_3',
        type:'list',
        message:'Which player holds the record for  the most expensive tranfer ever? \n',
        choices:[
            'Cristiano Ronaldo',
            'Neymar Jr.',
            'Kylian Mbappe',
            'Lionel Messi',
        ],
    });
    return handleAns(answers.question_3=='Neymar Jr.')
}


await question3();
await sleep1();
async function question4(){
    const answers=await inquirer.prompt({
        name:'question_4',
        type:'list',
        message:'Who is the Champions Leagues top goalscorer of all time? \n',
        choices:[
            'Cristiano Ronaldo',
            'Lionel Messi',
            'Karim Benzema',
            'Robert Lewendowski',
        ],
    });
    return handleAns(answers.question_4=='Cristiano Ronaldo')
}


await question4();
await sleep1();
async function question5(){
    const answers=await inquirer.prompt({
        name:'question_5',
        type:'list',
        message:'In which World Cup did Diego Maradona score his infamous "Hand of God" goal? \n',
        choices:[
            'Italy 1990',
            'Spain 1982',
            'USA 1994',
            'Mexico 1986',
        ],
    });
    return handleAns(answers.question_5=='Mexico 1986')
}


await question5();
await sleep1();
async function question6(){
    const answers=await inquirer.prompt({
        name:'question_6',
        type:'list',
        message:'Which Portuguese team did Ronaldo play for before signing for Manchester United? \n',
        choices:[
            'Porto',
            'Sporting Lisbon',
            'Benfica',
            'Manchester City',
        ],
    });
    return handleAns(answers.question_6=='Sporting Lisbon')
}


await question6();
await sleep1();
async function question7(){
    const answers=await inquirer.prompt({
        name:'question_7',
        type:'list',
        message:'Which country has won the most World Cups? \n',
        choices:[
            'Brazil',
            'Argentina',
            'Germany',
            'Spain',
        ],
    });
    return handleAns(answers.question_7=='Brazil')
}


await question7();
await sleep1();
async function question8(){
    const answers=await inquirer.prompt({
        name:'question_8',
        type:'list',
        message:'Which team won the first Premier League title? \n',
        choices:[
            'Chelsea',
            'Newcastle United',
            'Liverpool',
            'Manchester United',
        ],
    });
    return handleAns(answers.question_8=='Manchester United')
}


await question8();
await sleep1();
async function question9(){
    const answers=await inquirer.prompt({
        name:'question_9',
        type:'list',
        message:'Which country won the first ever World Cup in 1930? \n',
        choices:[
            'Argentina',
            'Brazil',
            'Uruguay',
            'England',
        ],
    });
    return handleAns(answers.question_9=='Uruguay')
}


await question9();
await sleep1();
async function question10(){
    const answers=await inquirer.prompt({
        name:'question_10',
        type:'list',
        message:'Who is the greatest plyer of all times? \n',
        choices:[
            'Cristiano Ronaldo',
            'Lionel Messi',
            'Pele',
            'Maradona',
        ],
    });
    return handleAns(answers.question_10=='Cristiano Ronaldo')
}


await question10();
await sleep1();

function winner(){
    console.clear();
    const msg=`Congrats, ${playerName} !!.
    No gifts here ; )`

    figlet(msg,(err,data)=>{
        console.log(gradient.pastel.multiline(data));
    });
}

winner();