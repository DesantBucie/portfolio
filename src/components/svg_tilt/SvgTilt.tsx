import './SvgTilt.scss';

interface props {
    div?:string,
    svg?:string,
}

export const SvgTilt = (props:props) => {
    return (
        <div className={"svg-tilt svg-tilt" + props.div}>
            <svg className={'svg-tilt__svg svg-tilt__svg' + props.svg} data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="svg-tilt__shape-fill"></path>
            </svg>
        </div>
    );
};