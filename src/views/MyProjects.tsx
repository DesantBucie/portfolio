import { FC } from 'react';
import { MobileProjects } from 'components/my-projects/MobileProjects';
import { DesktopProjects } from 'components/my-projects/DesktopProjects';

import './MyProjects.scss';

interface props {
    language: boolean,
    width: number,
}
const MyProjects: FC<props> = (props) => {

    return (
        <section className="my-projects" id="my-projects">

            {props.language ?
                <h2 className="my-projects--english">My projects</h2>
                :
                <h2 className="my-projects--polish">Moje projekty</h2>
            }
            { props.width > 1023 ?
                <DesktopProjects />
                :
                <MobileProjects />
            }
        </section>
    );
}
export default MyProjects;
