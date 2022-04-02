import Countdown from "react-countdown";
const date = new Date('2022-05-29 08:00:00').getTime();

const Complete = () => <span>Happy Wedding!</span>;

const prefixZero = (numbers) =>
{
    return numbers < 10 ? `0${numbers}` : numbers;
}

const renderer = ({days, hours, minutes, seconds, completed}) => {
    if (completed) {
        return <Complete />;
    } else {
        return (
        <span>
            {prefixZero(days)}:{prefixZero(hours)}:{prefixZero(minutes)}:{prefixZero(seconds)}
        </span>
        );
    }
};

export default function countDown() {
    return (
        <Countdown date={date} renderer={renderer} />
    )
}

