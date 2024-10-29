import { useContext } from "react";
import { Layout, Row, Col } from "antd";
import { categoryContext } from "../context/categoryContext";
import { cardContext } from "../context/cardContext";
import Title from "antd/es/typography/Title";
import { categoryInterface } from "../interfaces/categoryInterface";


export const Dashboard = () => {
  const { Header, Footer, Content } = Layout;
  const {categoriesList, setCategoriesList, isLoading} = useContext(categoryContext);
  console.log(categoriesList);

  if(isLoading) {
    return (<h1>Cargando...</h1>)
  }

  const layoutStyle = {
    minHeight: '100lvh',
  }


  return (
    <Layout style={layoutStyle}>
      <Header></Header>
      <Content>      
        <Title className="text-center">Dashboard</Title>
        <hr/>
        <Row gutter={[16, 16]}>
        {
            categoriesList.map( ({id, name}:categoryInterface) => {
              return <Col key={id}>
                <Title level={2}>{name}</Title>
              </Col>
            })
          }
        </Row>      
      </Content>
      <Footer></Footer>
    </Layout>
  )
}
