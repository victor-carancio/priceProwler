import styled from "styled-components";

const TermOfUse = () => {
  return (
    <TermOfUseContainer>
      <h2>Política de Privacidad</h2>
      <p>
        {" "}
        Tu privacidad es importante para nosotros. Este sitio es un proyecto de
        portafolio diseñado para comparar precios entre distintas tiendas de
        videojuegos. A continuación, detallamos cómo manejamos los datos de los
        usuarios:
      </p>
      <ListOfTerms>
        <ListElements>
          <h3>Información que recopilamos</h3>
          <p>
            Actualmente, no recopilamos ni almacenamos información personal de
            los usuarios.
          </p>
        </ListElements>
        <ListElements>
          <h3>Uso de Local Storage</h3>
          <p>
            Este sitio utiliza Local Storage únicamente para almacenar la
            preferencia de tema (claro u oscuro), con la finalidad de
            personalizar la experiencia de usuario.
          </p>
        </ListElements>
        <ListElements>
          <h3>Enlaces a terceros</h3>
          <p>
            {" "}
            Nuestra plataforma redirige a sitios de terceros donde se pueden
            verificar precios actualizados y realizar compras. Al hacer clic en
            estos enlaces, estarás sujeto a las políticas de privacidad de
            dichos sitios. Te recomendamos revisarlas antes de interactuar con
            ellos.
          </p>
        </ListElements>
        <ListElements>
          <h3>Cambios futuros</h3>
          <p>
            {" "}
            En el futuro, podríamos implementar funcionalidades que requieran
            recopilar información personal. Si esto ocurre, actualizaremos esta
            política para reflejar los cambios y garantizaremos el cumplimiento
            de las normativas aplicables.
          </p>
        </ListElements>
      </ListOfTerms>
      <h2>Términos de Uso</h2>
      <p>
        Bienvenido a nuestro sitio web. Al usar esta página, aceptas los
        siguientes términos y condiciones:
      </p>
      <ListOfTerms>
        <ListElements>
          <h3>Propósito del sitio</h3>
          <p>
            Este sitio es un proyecto de portafolio cuyo propósito es facilitar
            la comparación de precios de videojuegos entre distintas tiendas.
          </p>
        </ListElements>
        <ListElements>
          <h3>Exactitud de los precios</h3>
          <p>
            Nos esforzamos por mantener los precios actualizados, pero no
            garantizamos la exactitud o disponibilidad de los datos en todo
            momento. Los precios reales y actualizados pueden verificarse
            directamente en los sitios de las tiendas correspondientes.
          </p>
        </ListElements>
        <ListElements>
          <h3>Redirección a tiendas</h3>
          <p>
            Actualmente este sitio redirige a tiendas oficiales y en un futuro a
            terceros que venden claves para videojuegos. No somos responsables
            por transacciones realizadas en esos sitios, ni por la calidad o
            validez de los productos adquiridos.
          </p>
        </ListElements>
        <ListElements>
          <h3>Uso del contenido</h3>
          <p>
            {" "}
            El contenido de este sitio, incluyendo datos de precios, está
            destinado únicamente para uso personal e informativo. Está prohibida
            la copia, redistribución o uso comercial sin nuestro consentimiento
            previo.
          </p>
        </ListElements>
        <ListElements>
          <h3>Responsabilidad limitada</h3>
          <p>
            No asumimos responsabilidad por: Errores en los precios o
            información mostrada. Problemas o disputas que puedan surgir en
            sitios de terceros. Cualquier daño directo o indirecto derivado del
            uso de este sitio.
          </p>
        </ListElements>
        <ListElements>
          <h3>Cambios en los términos</h3>
          <p>
            {" "}
            Nos reservamos el derecho de actualizar estos términos en cualquier
            momento. Te recomendamos revisarlos periódicamente.
          </p>
        </ListElements>
      </ListOfTerms>
    </TermOfUseContainer>
  );
};

export default TermOfUse;

const TermOfUseContainer = styled.section`
  padding: 100px;
  margin: 0 auto;
  /* height: calc(90vh + 60px); */
  width: 100%;
  max-width: 1440px;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: flex-start;
  gap: 30px;
  text-align: justify;

  h2 {
    font-size: 30px;
  }

  h2,
  h3 {
    color: ${({ theme }) => theme.text};
  }

  p {
    color: ${({ theme }) => theme.textBody};
    /* letter-spacing: 2px; */
  }
`;

const ListOfTerms = styled.ul`
  list-style: decimal;
  display: flex;
  flex-direction: column;
  gap: 10px;

  li {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
  h3 {
    font-size: 22px;
  }
`;

const ListElements = styled.li`
  /* margin: 60px 0; */
  /* display: flex; */
  /* flex-direction: column; */
  /* gap: 10px; */
`;
