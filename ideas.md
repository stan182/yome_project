// TODO: hardcode friends

// validateEvent :: Event -> m Unit

const validateEvent = (event: Event): Promise<void> => {
    if (participants not include payer) {
        throw 'No payer in participants';
    } else if (false) {
        // ...
        throw 'Something else went wrong';
    } else {
        return;
    }
}

// request -> event
// await validateEvent(event)
// db.store(event)


// type Event = { datetime: DateTime, comment: Text, payer: UserId, sum: Money, participants: f UserId }

// type Event = { datetime: DateTime, comment: Text, participants: { [UserId]: { cheque: Money, paid: Money } } }

// History
// :: f Event
// :: f Event -> f (UI (Event'))

// Summary
// ?