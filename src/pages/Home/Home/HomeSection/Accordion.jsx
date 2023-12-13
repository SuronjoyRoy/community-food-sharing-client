
const Accordion = () => {
    return (
        <div className="w-3/4 mx-auto ">
            <div className="my-30 py-20">
                <h1 className="text-3xl text-center font-medium">Frequently Ask?</h1>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" checked="checked" />
                <div className="collapse-title text-xl font-medium">
                    Who can come?
                </div>
                <div className="collapse-content">
                    <p>We serve residents of Derry and surrounding towns. We have never turned anyone away who was hungry or without food.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    What do I need to bring?
                </div>
                <div className="collapse-content">
                    <p>Bring a photo ID with your current address, or a photo ID plus a piece of mail with your current address.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 mb-16">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    Do I need to schedule an appointment?
                </div>
                <div className="collapse-content">
                    <p>No, you do not need to call ahead. Please stop by during our open hours with a photo ID with your current address, or a photo ID plus a piece of mail with your current address. Anyone is welcome to visit the pantry 2 times per month.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 mb-16">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                    What type of food is available?
                </div>
                <div className="collapse-content">
                    <p>We provide basic household items like canned soups and vegetables, other non-perishables, pasta, bread, and juice. When available, we also provide eggs and meat.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200 mb-16">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-medium">
                Is the pantry wheelchair accessible?
                </div>
                <div className="collapse-content">
                    <p>Our new location has ground-floor access with no steps. If you have other mobility restrictions, please call us or let one of our volunteers know.

                    </p>
                </div>
            </div>
        </div>
    );
};

export default Accordion;