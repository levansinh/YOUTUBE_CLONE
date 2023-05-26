import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from '../sass/module/Button.module.scss';
const cx = classNames.bind(styles);
function Button({ to, href, primary = false, black = false,rounded, small = false,tag=false, onClick, children, ...passPort }) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passPort,
    };
    const classes = cx('button', { primary, black, small,tag,rounded });
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        Comp = 'a';
    }
    return (
        <Comp className={classes} {...props}>
            {children}
        </Comp>
    );
}

export default Button;
