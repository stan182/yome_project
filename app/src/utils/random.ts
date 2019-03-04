import { Event } from "../general/models";
import _ from "lodash";
import uuid from "uuid/v4";

const generateDatetime = () => {
	const date = new Date(2019, Math.random()*11, Math.random()*28)
	return `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`
};

const generateComment = () => ` Event${Math.floor(Math.random() * 100)}`;

const generateUserId = () => ` User${Math.floor(Math.random() * 100)}`;

const generateSum = () => Math.floor(Math.random() * 10000);

// generateEvent :: Unit -> Eff (random :: RANDOM) Event
const generateEvent = () => {
    return {
		id: uuid(),
        datetime: generateDatetime(),
        comment: generateComment(),
        payer: generateUserId(),
        sum: generateSum(),
        participants: _.fill(Array(Math.floor(Math.random() * 10) + 1), 1).map(() =>
            generateUserId()
        ),
    };
};

const randomEvents: Event[] = _.fill(Array(Math.floor(Math.random() * 100) + 1), 1).map(() =>
    generateEvent()
);

export { randomEvents };
