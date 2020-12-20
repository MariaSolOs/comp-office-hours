const Instructor = require('./models/instructor'),
      Student = require('./models/student');

const instructorsSeeds = [
    {
        name: 'Maria Solano',
        zoomLink: 'https://mcgill.zoom.us/j/4489032293',
        photo: `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_400/v1608416192/COMP202-OHBA/maria-solano.jpg`
    },
    {
        name: 'Giulia Alberini',
        zoomLink: 'https://mcgill.zoom.us/j/91453956432'
    }
];

const studentsSeeds = [
    {
        name: 'Ophelia Solano',
        mcgillId: '260768266'
    }
];

module.exports = () => {
    console.log('Start seeding database...');
    
    instructorsSeeds.forEach(async seed => {
        try {
            const inst = new Instructor(seed);
            inst.appointments = [];
            await inst.save();
        } catch(error) {
            console.error(`INSTRUCTOR SEEDING FAILED: ${error}`);
        }
    });

    studentsSeeds.forEach(async seed => {
        try {
            const student = new Student(seed);
            await student.save();
        } catch(error) {
            console.error(`STUDENT SEEDING FAILED: ${error}`);
        }
    });

    console.log('Done seeding database');
}