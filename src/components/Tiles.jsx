import classNames from 'classnames';
import clickHandler from '../helpers/tileHelper';

const Tiles = (props) => {
    const { numbers, target, correct, setCorrect, setState } = props;

    const listOfNumbers = numbers.map((data, index) => {
        const displayClass = classNames('active', {
            inactive: !data.active,
            correct: correct === true && data.number === numbers[target].number,
        });

        return (
            <div
              key={index}
              className={displayClass}
              onClick={() => {
                if (displayClass !== 'active inactive') {
                    return clickHandler(
                        target,
                        data.number,
                        numbers,
                        setCorrect,
                        setState
                    );
                }
              }}
            >
                {data.number}
            </div>      
        );
    });
    return <>{listOfNumbers}</>;
};

export default Tiles;