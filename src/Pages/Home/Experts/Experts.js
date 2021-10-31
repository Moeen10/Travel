import React from 'react';

import Mentor1 from '../../../images/mentors/rsz_mentor1.jpg';
import Mentor2 from '../../../images/mentors/rsz_mentor2.jpg'
import Mentor3 from '../../../images/mentors/rsz_mentor3.jpg'
import Expert from '../Expert/Expert';

const experts = [
    {
        img: Mentor1,
        name: 'Moeen Uddin',
    },
    {
        img: Mentor2,
        name: 'Anupam Akib',
    },
    {
        img: Mentor3,
        name: 'Rakib',
    }
]

const Experts = () => {
    return (
        <div id="experts" className="container">
            <h1 className="text-primary mt-5">Mentors in tourism</h1>
            <br />
            <div className="row">
                {
                    experts.map(expert => <Expert
                        key={expert.name}
                        expert={expert}
                    >

                    </Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;