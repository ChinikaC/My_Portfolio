import { BsLinkedin } from 'react-icons/bs';
import { MdOutlineMarkEmailUnread } from 'react-icons/md';
import { BsGithub } from 'react-icons/bs';

const Contact = () => {

    return (
        <div className="contactDetails">
            <div>
                <h1> Feel Free to Contact me On:</h1>
            </div>
            <div className="contactIcons">
            <ul>
        <li>
          LinkedIn <BsLinkedin/>
        </li>
        <li>
            Email <MdOutlineMarkEmailUnread/>
        </li>
        </ul>
        <p> View the code for my projects on my GitHub <BsGithub/></p>

            </div>
        </div>
    )

};

export default Contact;