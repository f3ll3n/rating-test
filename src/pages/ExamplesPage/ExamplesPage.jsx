import ExampleCard from "../../components/ExampleCard/ExampleCard";
import style from './ExamplesPage.module.scss';
import { data } from "../../data/data";
import { Link } from "react-router-dom";
export default function ExamplesPage() {
    return (
      <div>
        <div className={style.cards}>
          {/* {data && data.map((item, idx) => {
            return (
              <Link key={idx} to={`/examples/${idx}`}>
                <ExampleCard name={item.user}/>
              </Link>
            )
          })} */}
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