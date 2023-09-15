import ExampleCard from "../../components/ExampleCard/ExampleCard";
import style from './ExamplesPage.module.scss';
export default function ExamplesPage() {
    return (
      <div>
        <div className={style.cards}>
          <ExampleCard />
          <ExampleCard />
          <ExampleCard />
          <ExampleCard />
          <ExampleCard />
          <ExampleCard />
          <ExampleCard />
          <ExampleCard />
          <ExampleCard />
          <ExampleCard />
        </div>
      </div>
    );
  }