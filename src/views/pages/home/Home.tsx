import { Button, Spinner } from "@nextui-org/react";
import { useAuthStore } from "../../../store/auth/authStore";
import { LogginModal } from "../../auth/LogginModal";
import { LoggoutModal } from "../../auth/LoggoutModal";
import { CardGames } from "../../components/Cards/CardGames";

export const Home = () => {
  const { status, avatar, username } = useAuthStore((state) => state);
  return (
    <div className="bg-principal flex-center-center">
      <div className="grid grid-cols-3 max-w-4xl h-96 gap-4">
        <div className="bg-white shadow-md rounded-md w-full h-full text-black">
          {status == "not logged" && (
            <div className="h-full w-full flex flex-col items-center justify-center gap-4 p-4">
              <img
                src="icons/avatarMan.apng"
                alt="avatar man"
                className="w-32 h-32"
              />
              <p className="text-center font-semibold">
                Para el uso necesitamos un usuario
              </p>
              <LogginModal />
            </div>
          )}
          {status == "logged" && (
            <div className="flex flex-col justify-between py-4">
              <div className="text-center mt-4">
                <img
                  src={`${avatar ? avatar : "icons/anonimus.png"}`}
                  alt="avatar image"
                  className="w-44 h-44 rounded-full mx-auto mt-4"
                />
                <p className="text-lg">Julian Agama Tanta</p>
                <p>
                  <span className="font-semibold">Puntuación:</span> 540
                </p>
              </div>
              <Button color="primary" className="mx-auto">
                Ver estadísticas
              </Button>
            </div>
          )}
          {status == "anonymous" && (
            <div className="flex flex-col justify-between py-4">
              <div className="text-center mt-4">
                <img
                  src="icons/anonimus.apng"
                  alt="avatar image"
                  className="w-44 h-44 rounded-full mx-auto mt-4"
                />
                <p className="text-lg font-bold">{username}</p>
              </div>
              <LoggoutModal />
            </div>
          )}
          {status == "checking" && (
            <div className="w-full h-full flex items-center justify-center">
              <Spinner />
            </div>
          )}
        </div>
        <div className="col-span-2 w-full h-96 grid grid-cols-3 justify-items-center gap-3 content-center">
          <CardGames
            img="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.es%2Ficono-gratis%2Fcalculadora_342344&psig=AOvVaw0SKy7g0eO9Txv5K4lIpH5p&ust=1699121695105000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCIDkmee3qIIDFQAAAAAdAAAAABAE"
            title="Random Maths"
            link="random-maths"
          />
        </div>
      </div>
    </div>
  );
};
