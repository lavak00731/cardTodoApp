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
        <Row justify={"center"} gutter={[32, 16]}>
        {
            categoriesList.map( ({id, name}:categoryInterface) => {
              return <Col key={id}>
                      <Title level={2}>{name}</Title>
                      
                      {
                        categoriesList.map()
                      }
                    </Col>
            })
          }
        </Row>      
      </Content>
      <Footer></Footer>
    </Layout>
  )
}
