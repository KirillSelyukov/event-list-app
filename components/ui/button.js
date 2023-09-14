import Link from "next/link";
import classes from "./button.module.css";
const Button = ({ children, ...props }) => {
  return (
    <Link className={classes.btn} {...props}>
      {children}
    </Link>
  );
};

export default Button;
