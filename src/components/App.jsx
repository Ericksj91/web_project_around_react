import { useEffect, useState } from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import api from "../utils/api";
import RemoveCard from "./Main/components/Popup/RemoveCard/RemoveCard";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [popup, setPopup] = useState(null);
  const [count, setCount] = useState(0);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [cardDelete, setCardDelete] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const removeCardPopup = {
    title: "¿Estás seguro?",
    children: <RemoveCard />,
    className: "popup__content_type_delete",
  };

  function handleRemoveCard(card) {
    setCardDelete(card);
    handleOpenPopup(removeCardPopup);
  }

  function handleOpenPopup(popup) {
    setPopup(popup);
  }

  function handleClosePopup() {
    setPopup(null);
  }

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      await api
        .getUserInfo()
        .then((userInfo) => {
          setCurrentUser(userInfo);
        })
        .catch((err) => {
          console.error(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    })();
  }, []);

  function handleUpdateUser(data) {
    (async () => {
      setIsLoading(true);
      await api
        .updateUserInfo(data)
        .then((newData) => {
          setCurrentUser(newData);
          handleClosePopup();
        })
        .catch((err) => {
          console.error(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    })();
  }

  function handleUpdateAvatar(link) {
    (async () => {
      setIsLoading(true);
      await api
        .updateUserAvatar(link.avatar)
        .then((newLink) => {
          setCurrentUser(newLink);
          handleClosePopup();
        })
        .catch((err) => {
          console.error(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    })();
  }

  useEffect(() => {
    api
      .getInitialCards()
      .then((initialCards) => {
        setCards(initialCards);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  async function handleCardLike(card) {
    const isLiked = card.isLiked;

    await api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((currentCard) =>
            currentCard._id === card._id ? newCard : currentCard,
          ),
        );
      })
      .catch((error) => console.error(error));
  }

  async function handleCardDelete(card) {
    await api
      .deleteCard(card._id)
      .then(() => {
        setCards((state) =>
          state.filter((currentCard) => currentCard._id !== card._id),
        );
        handleClosePopup();
      })
      .catch((error) => console.error(error));
  }

  async function handleAddPlaceSubmit(data) {
    setIsLoading(true);
    await api
      .addCard(data)
      .then((newCard) => {
        setCards((cards) => [newCard, ...cards]);
        handleClosePopup();
      })
      .catch((error) => console.error(error))
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <>
      <CurrentUserContext.Provider
        value={{
          currentUser,
          handleUpdateUser,
          handleUpdateAvatar,
          handleAddPlaceSubmit,
          handleCardDelete,
          cardDelete,
          isLoading,
        }}
      >
        <div className="page__content">
          <Header />
          <Main
            onOpen={handleOpenPopup}
            onClosePopup={handleClosePopup}
            popup={popup}
            cards={cards}
            onCardLike={handleCardLike}
            onCardDelete={handleRemoveCard}
          />
          <Footer />
        </div>
      </CurrentUserContext.Provider>
    </>
  );
}

export default App;
