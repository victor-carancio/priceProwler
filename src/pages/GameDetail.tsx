import { useParams } from "react-router-dom";
import { useGetGameDetailQuery } from "../store/apis/gameApi";

const GameDetail = () => {
  const { id } = useParams();

  const { data, error, isLoading } = useGetGameDetailQuery(id!);

  //todo: loading y error de busqueda
  if (isLoading) return <div>Cargando games....</div>;
  if (error) return <div>Ocurrió un error al cargar los datos</div>;
  console.log(data);
  return <div>GameDetail de {data?.gameName}</div>;
};

export default GameDetail;
