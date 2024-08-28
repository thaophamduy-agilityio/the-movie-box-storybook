// Components
import { Select, Tab, Tabs, LoadingIndicator, Card } from "@/components";

// Types
import { MovieInfoData } from "@/types";

// Constants
import { CARD_MESSAGES } from "@/constants";

// Mocks
import { TAB_SELCET_GENRES } from "@/mocks";

interface ListCardProps {
  listCard: MovieInfoData[] | undefined;
  onChange: () => void;
}

const ListCard = ({ listCard, onChange }: ListCardProps) => {
  const renderListCard = (): JSX.Element[] | undefined => {
    return listCard?.map((card) => (
      <Card
        key={card.id}
        publicYear={card.publicYear}
        imgSrc={card.imgSrc}
        title={card.title}
        genres={card.genres}
        rating={card.rating}
      />
    ));
  };

  return (
    <section className="relative p-10 pt-4 -mt-10">
      <div className="w-full h-80 bg-main absolute top-0 left-0"></div>
      <Tabs>
        <Tab label="Trending">
          {listCard?.length ? (
            <>
              <ul className="card-list grid gap-4 grid-cols-4 mb-8">
                {renderListCard()}
              </ul>
              <LoadingIndicator />
            </>
          ) : (
            <p className="relative card-item not-found">
              {CARD_MESSAGES.NO_DATA}
            </p>
          )}
        </Tab>
        <Tab label="Top Rated">
          <p>This is some content for the Top Rated tab.</p>
        </Tab>
        <Tab label="New Arrivals">
          <p>This is some content for the New Arrivals tab.</p>
        </Tab>
        <Tab label={<Select onChange={onChange} options={TAB_SELCET_GENRES} />}>
          This is some content for the Genre tab.
        </Tab>
      </Tabs>
    </section>
  );
};

export default ListCard;
