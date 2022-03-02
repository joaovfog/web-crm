import { Card } from "@mui/material";
import "./card.css";

export const DraggableCard = () => {
  const handleDraggableCard = () => {
    const list_items = document.querySelectorAll<HTMLElement>(".list-item");
    const lists = document.querySelectorAll<HTMLElement>(".list");

    let draggedItem: any = null;

    for (let i = 0; i < list_items.length; i++) {
      const item = list_items[i];

      item.addEventListener("dragstart", function () {
        draggedItem = item;
        setTimeout(function () {
          item.style.display = "none";
        }, 0);
      });

      item.addEventListener("dragend", function () {
        setTimeout(function () {
          draggedItem.style.display = "block";
          draggedItem = null;
        });
      });

      for (let j = 0; j < lists.length; j++) {
        const list = lists[j];

        list.addEventListener("dragover", function (e: any) {
          e.preventDefault();
        });

        list.addEventListener("dragenter", function (e: any) {
          e.preventDefault();
          this.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
        });

        list.addEventListener("dragleave", function () {
          this.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
        });

        list.addEventListener("drop", function () {
          console.log("drop");
          this.append(draggedItem);
          this.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
        });
      }
    }
  };

  return (
    <Card className="lists" onClick={handleDraggableCard}>
      <div className="list">
        <div className="list-item" draggable="true">
          List item 1
        </div>
        <div className="list-item" draggable="true">
          List item 2
        </div>
        <div className="list-item" draggable="true">
          List item 3
        </div>
      </div>
      <div className="list"></div>
      <div className="list"></div>
    </Card>
  );
};
