import bg1 from "../assets/image1.png";
import person from "../assets/person.webp";
import { PiBookOpen } from "react-icons/pi";
import { SlPeople } from "react-icons/sl";
import { CiStar } from "react-icons/ci";

const Live = () => {
  const cards = [
    {
      id: 1,
      view: "8",
      people: "10216",
      rating: "4.69",
      title: "Introduction to ERPNext ",
      description: "ERPNext is the worlds best free and open source ERP. ",
      author: "Reema Mehta",
      price: "Free",
    },
    {
      id: 2,
      view: "8",
      people: "10216",
      rating: "4.69",
      title: "Introduction to ERPNext ",
      description: "ERPNext is the worlds best free and open source ERP. ",
      author: "Reema Mehta",
      price: "Free",
    },
    {
      id: 3,
      view: "8",
      people: "10216",
      rating: "4.69",
      title: "Introduction to ERPNext ",
      description: "ERPNext is the worlds best free and open source ERP. ",
      author: "Reema Mehta",
      price: "Free",
    },
    {
      id: 4,
      view: "8",
      people: "10216",
      rating: "4.69",
      title: "Introduction to ERPNext ",
      description: "ERPNext is the worlds best free and open source ERP. ",
      author: "Reema Mehta",
      price: "Free",
    },
    {
      id: 5,
      view: "8",
      people: "10216",
      rating: "4.69",
      title: "Introduction to ERPNext ",
      description: "ERPNext is the worlds best free and open source ERP. ",
      author: "Reema Mehta",
      price: "Free",
    },
    {
      id: 6,
      view: "8",
      people: "10216",
      rating: "4.69",
      title: "Introduction to ERPNext ",
      description: "ERPNext is the worlds best free and open source ERP. ",
      author: "Reema Mehta",
      price: "Free",
    },
    {
      id: 7,
      view: "8",
      people: "10216",
      rating: "4.69",
      title: "Introduction to ERPNext ",
      description: "ERPNext is the worlds best free and open source ERP. ",
      author: "Reema Mehta",
      price: "Free",
    },
    {
      id: 8,
      view: "8",
      people: "10216",
      rating: "4.69",
      title: "Introduction to ERPNext ",
      description: "ERPNext is the worlds best free and open source ERP. ",
      author: "Reema Mehta",
      price: "Free",
    },
    {
      id: 9,
      view: "8",
      people: "10216",
      rating: "4.69",
      title: "Introduction to ERPNext ",
      description: "ERPNext is the worlds best free and open source ERP. ",
      author: "Reema Mehta",
      price: "Free",
    },
    {
      id: 10,
      view: "8",
      people: "10216",
      rating: "4.69",
      title: "Introduction to ERPNext ",
      description: "ERPNext is the worlds best free and open source ERP. ",
      author: "Reema Mehta",
      price: "Free",
    },
    {
      id: 11,
      view: "8",
      people: "10216",
      rating: "4.69",
      title: "Introduction to ERPNext ",
      description: "ERPNext is the worlds best free and open source ERP. ",
      author: "Reema Mehta",
      price: "Free",
    },
    {
      id: 12,
      view: "8",
      people: "10216",
      rating: "4.69",
      title: "Introduction to ERPNext ",
      description: "ERPNext is the worlds best free and open source ERP. ",
      author: "Reema Mehta",
      price: "Free",
    },
    {
      id: 13,
      view: "8",
      people: "10216",
      rating: "4.69",
      title: "Introduction to ERPNext ",
      description: "ERPNext is the worlds best free and open source ERP. ",
      author: "Reema Mehta",
      price: "Free",
    },
    {
      id: 14,
      view: "8",
      people: "10216",
      rating: "4.69",
      title: "Introduction to ERPNext ",
      description: "ERPNext is the worlds best free and open source ERP. ",
      author: "Reema Mehta",
      price: "Free",
    },
    {
      id: 15,
      view: "8",
      people: "10216",
      rating: "4.69",
      title: "Introduction to ERPNext ",
      description: "ERPNext is the worlds best free and open source ERP. ",
      author: "Reema Mehta",
      price: "Free",
    },
    {
      id: 16,
      view: "8",
      people: "10216",
      rating: "4.69",
      title: "Introduction to ERPNext ",
      description: "ERPNext is the worlds best free and open source ERP. ",
      author: "Reema Mehta",
      price: "Free",
    },
    {
      id: 17,
      view: "8",
      people: "10216",
      rating: "4.69",
      title: "Introduction to ERPNext ",
      description: "ERPNext is the worlds best free and open source ERP. ",
      author: "Reema Mehta",
      price: "Free",
    },
    {
      id: 18,
      view: "8",
      people: "10216",
      rating: "4.69",
      title: "Introduction to ERPNext ",
      description: "ERPNext is the worlds best free and open source ERP. ",
      author: "Reema Mehta",
      price: "Free",
    },
  ];

  return (
    <div className="w-full mt-4">
      <div className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {cards.map((card) => (
          <div
            key={card.id}
            className=" flex flex-col border rounded-xl w-full"
            style={{ height: "350px" }}
          >
            <div
              className="h-[50%] flex "
              style={{
                backgroundImage: `url(${bg1})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="mt-4 ml-4 text-xs rounded-lg border font-bold px-3 bg-white h-6 items-center flex ">
                BEGINNER
              </div>
            </div>
            <div className="flex flex-col items-center p-4 gap-2">
              <div className="flex w-full items-center justify-between">
                <div className="flex items-center">
                  <PiBookOpen size={20} />
                  <span className="font-[16px]">{card.view}</span>
                </div>
                <div className="flex items-center ">
                  <SlPeople size={20} />
                  <span className="font-[16px]">{card.people}</span>
                </div>

                <div className="flex items-center ">
                  <CiStar size={20} />
                  <span className="font-[16px]">{card.rating}</span>
                </div>
              </div>

              <div className="flex flex-col items-start ">
                <div className="text-xl font-bold">{card.title}</div>
                <div>{card.description}</div>
              </div>

              <div className="flex w-full items-center">
                <div className="flex w-full justify-between">
                  <div className="flex gap-2 items-center">
                    <img
                      src={person}
                      alt={card.author}
                      className="h-5 w-5 rounded-full"
                    />
                    <span>{card.author}</span>
                  </div>
                  <span>{card.price}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Live;
