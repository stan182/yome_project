enum NavigationRoutes {
    Home = "Home",
    AddEvent = "AddEvent",
    Profile = "Profile",
}

type UserId = string;

type Money = number;

type TapHandler = () => void;

interface Event {
    datetime: string;
    comment: string;
    payer: UserId;
    sum: Money;
    participants: UserId[];
}

export { NavigationRoutes, UserId, Money, TapHandler, Event };
