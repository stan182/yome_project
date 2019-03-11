enum NavigationRoutes {
    Home = "Home",
    AddEvent = "AddEvent",
    Profile = "Profile",
}

interface User {
    id: string,
    name: string,
};

type Money = number;

type TapHandler = () => void;

interface Event {
    id: string;
    datetime: string;
    comment: string;
    payer: User;
    sum: Money;
    participants: User[];
}

export { NavigationRoutes, User, Money, TapHandler, Event };
