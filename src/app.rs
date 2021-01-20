use log::*;
use serde_derive::{Deserialize, Serialize};
use strum::IntoEnumIterator;
use strum_macros::{EnumIter, ToString};
use yew::format::Json;
use yew::prelude::*;
use yew::services::storage::{Area, StorageService};

const KEY: &str = "yew.todomvc.self";

pub struct App {
    link: ComponentLink<Self>,
    storage: StorageService,
    state: State,
}

#[derive(Serialize, Deserialize)]
pub struct State {
    name: String,
}

pub enum Msg {
}

impl Component for App {
    type Message = Msg;
    type Properties = ();

    fn create(_: Self::Properties, link: ComponentLink<Self>) -> Self {
        let storage = StorageService::new(Area::Local).unwrap();

        let state = State {
            name: "".into(),
        };
        App {
            link,
            storage,
            state,
        }
    }

    fn change(&mut self, _props: Self::Properties) -> ShouldRender {
        false
    }

    fn update(&mut self, msg: Self::Message) -> ShouldRender {
        // match msg {}
        // self.storage.store(KEY, Json(&self.state.entries));
        false
    }

    fn view(&self) -> Html {
        html! {
            <section class="container">
                <article class="c-profile-card">
                    <header class="c-profile-card__header"></header>
                    <section class="c-profile-card__body">
                        <figure class="c-profile-card__body--profile">
                            <img
                                src="assets/images/image-victor.jpg"
                                alt="victor crest image profile" />
                        </figure>
                            <h1 class="c-profile-card__body--name">
                                <span>{"Victor Crest"}</span>
                                <span class="c-profile-card__body--age">{"26"}</span>
                            </h1>
                            <p class="c-profile-card__body--place">{"London"}</p>
                    </section>
                    <footer class="c-profile-card__footer">
                        <ul class="c-profile-card__info">
                            <li class="c-profile-card__info--item">
                                <p class="c-profile-card__info--number">{"80K"}</p>
                                <p class="c-profile-card__info--label">{"Followers"}</p>
                            </li>
                            <li class="c-profile-card__info--item">
                                <p class="c-profile-card__info--number">{"80K"}</p>
                                <p class="c-profile-card__info--label">{"Followers"}</p>
                            </li>
                            <li class="c-profile-card__info--item">
                                <p class="c-profile-card__info--number">{"80K"}</p>
                                <p class="c-profile-card__info--label">{"Followers"}</p>
                            </li>
                        </ul>
                    </footer>
                </article>
            </section>
        }
    }
}

impl App {

}

