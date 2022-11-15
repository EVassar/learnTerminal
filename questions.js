import inquirer from 'inquirer';

inquirer
    .prompt([
        {
            type: 'input',
            name: 'username',
            message: 'Username:'
        },
        {
            type: 'password',
            name: 'password',
        },
        {
            type: 'list',
            name: 'gender',
            message: 'What is your gender:',
            choices: ['Male', 'Female']
        },
        {
            type: 'number',
            name: 'displacement',
            message: 'How big is your engine? (in liters)',
        },
        {
            type: 'confirm',
            name: 'confirm',
            message: 'Doess your car have forced induction? :',
            default: true
        },
        {
            type: 'rawlist',
            name: 'rawlist',
            message: 'What are your favorite colors?',
            choices: [
                'Red',
                'Blue',
                'Green',
                'Orange',
                'Purple',
                'Pink',
                'White',
                'Black'
            ]
        },
        {
            type: 'checkbox',
            name: 'checkbox',
            message: "What color is your car",
            choices: [
                'Red',
                'Blue',
                'Green',
                'Orange',
                'Purple',
                'Pink',
                'White',
                'Black',
                'Yellow',
                'Brown',
                'Silver',
                'Pink',
                'Gray',
                'Black',
                'other',

            ]
        },
        {
            type: 'expand',
            name: 'expand',
            message: 'What is your favorite drivetrain? (F,R,A)',
            choices: [
                {
                    name: 'Front Wheel Drive',
                    value: 'Front Wheel Drive (THE FUCK IS WRONG WITH YOUR CAR?)',
                    key: 'f'
                },
                {
                    name: 'Rear Wheel Drive',
                    value: 'Rear Wheel Drive (DRIFTY BOI)',
                    key: 'r'
                },
                {
                    name: 'All Wheel Drive',
                    value: '3',
                    key: 'a'
                },
            ]
        },
        {
            type:'confirm',
            name:'confirm2',
            message: 'Do you drive manual?',
        },
        {
            type: 'editor',
            name: 'car',
            message: 'What is your car?',
            default: '',
        },
    ])
    .then(function (answers) {
        if(answers.confirm === true) {
            if (answers.username) {
                console.log('Username: ' + answers.username);
            }
            if (answers.password) {
                console.log('Password: ' + answers.password);
            }
            if (answers.gender) {
                console.log('Gender:'+ answers.gender);
            }
            if (answers.displacement && typeof answers.displacement === 'number' && answers.displacement > 2) {
                console.log('Engine displacement: ' + answers.displacement);
            }
            else {
                console.log('My milk has more displacement than your car. :D');
            }
            if (answers.rawlist && answers.rawlist.length > 0) {
                console.log('Favorite colors: ' + answers.rawlist);
            }else {
                console.log("WHAT'S Wrong with you?");
            }
            if (answers.checkbox && answers.checkbox.length > 0) {
                console.log('Car color: ' + answers.checkbox);
            }
            if (answers.expand && answers.expand == 3) {
                console.log('Drivetrain: based');
            }
            else {
                console.log('Drivetrain: ' + answers.expand);
            }
            if (answers.confirm2 == true && answers.confirm2) {
                console.log('Gerbox: based');
            }else {
                console.log('Gerbox: not based very cringe');
            }
            if (answers.car) {
                console.log('Car: ' + answers.car);
            }
        }
        else {
            console.log("Don't care ur slow. (Pshhh pshh noises away)");
        }
    });