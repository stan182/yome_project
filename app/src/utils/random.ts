import { Event, User } from "../general/models";
import _ from "lodash";
import uuid from "uuid/v4";

const charsArray = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");

const generateDatetime = () => {
    const date = new Date(2019, Math.random() * 11, Math.random() * 28);
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
};

const generateComment = () => ` Event${Math.floor(Math.random() * 100)}`;

const generateUserName = (chars: string[]): User => {
    return {
        id: uuid(),
        name: `${chars[Math.floor(Math.random() * chars.length)]}${
            chars[Math.floor(Math.random() * chars.length)]
        }`,
    };
};

const generateSum = () => Math.floor(Math.random() * 100) * 100;

const generateParticipants = (): User[] =>
    _.fill(Array(Math.floor(Math.random() * 10) + 1), 1).map(() => generateUserName(charsArray));

// generateEvent :: Unit -> Eff (random :: RANDOM) Event
const generateEvent = () => {
    return {
        id: uuid(),
        datetime: generateDatetime(),
        comment: generateComment(),
        payer: generateUserName(charsArray),
        sum: generateSum(),
        participants: generateParticipants(),
    };
};

const randomEvents: Event[] = _.fill(Array(Math.floor(Math.random() * 100) + 1), 1).map(() =>
    generateEvent()
);

export { randomEvents };
