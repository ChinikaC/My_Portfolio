import { BsLinkedin } from 'react-icons/bs';
import { MdOutlineMarkEmailUnread } from 'react-icons/md';

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
        <h2> View the code for my projects on my GitHub:</h2>

            </div>
        </div>
    )

};

export default Contact;