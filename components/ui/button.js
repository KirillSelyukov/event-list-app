import Link from "next/link";
import classes from "./button.module.css";
const Button = ({ children, ...props }) => {
  if (props.href) {
    return (
      <Link href={props.href} className={classes.btn}>
        {children}
      </Link>
    );
  }
  return (
    <button className={classes.btn} {...props}>
      {children}
    </button>
  );
};

export default Button;
