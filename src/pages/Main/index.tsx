import Card from '../../components/Card/index';
import Layout from '../../components/Layout';
import Table from '../../components/Table';
import { cardList, tableList } from '../../fakeData';
import { ICardList } from '../../constants';

function Main() {
    const card: JSX.Element[] = cardList.map((i: ICardList) => (
        <Card
            key={i.content}
            count={i.count}
            content={i.content}
            icon={i.icon}
            color={i.color}
        />
    ));

    return (
        <Layout>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                {card}
            </div>
            <Table tableList={tableList} />
        </Layout>
    );
}
export default Main;
