import { Typography } from '@material-ui/core';

function Title({ title, ...props }) {
  return (
    <Typography align="center" {...props}>
      {title}
    </Typography>
  );
}

export default Title;
