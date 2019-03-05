enum NavigationRoutes {
    Home = "Home",
    AddEvent = "AddEvent",
    Profile = "Profile",
}

type User = string;

type Money = number;

type TapHandler = () => void;

interface Event {
    id: string;
    datetime: string;
    comment: string;
    payer: User;
    sum: Money;
    participants: string[];
}

export { NavigationRoutes, User, Money, TapHandler, Event };
