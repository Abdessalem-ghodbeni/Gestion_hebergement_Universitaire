import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Foyer } from "src/app/models/Foyer/foyer";
import { Universite } from "src/app/models/Universite/universite";
import { UniversiteService } from "src/app/services/Universite/universite.service";
import { FoyerService } from "src/app/services/foyer/foyer.service";
import Swal from "sweetalert2";

@Component({
  selector: "app-liste-foyer",
  templateUrl: "./liste-foyer.component.html",
  styleUrls: ["./liste-foyer.component.css"],
})
export class ListeFoyerComponent implements OnInit {
  listeFoyer: Foyer[] = [];
  foyerToUpdated!: Foyer;
  formFoyerUpdate!: FormGroup;
  constructor(
    private _foyer_service: FoyerService,
    private _builder: FormBuilder,
    private _university_services: UniversiteService
  ) {}
  ngOnInit(): void {
    this.getAllFoyer();
    this.formFoyerUpdate = this._builder.group({
      idFoyer: ["", Validators.required],
      nomFoyer: ["", Validators.required],
      capaciteFoyer: ["", Validators.required],
    });
  }

  getAllFoyer() {
    this._foyer_service.getAllFoyer().subscribe({
      next: (data: Foyer[]) => {
        console.log(data);
        if (data.length > 0) {
          this.listeFoyer = data;
          console.log("liste : ", this.listeFoyer);
        } else {
          Swal.fire({
            icon: "info",
            title: "Oops...",
            text: "liste of foyer is empty!",
          });
        }
      },
      error: () => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      },
    });
  }
  sendId(id: number) {
    this._foyer_service.getFoyerById(id).subscribe({
      next: (data: any) => {
        this.formFoyerUpdate.patchValue({
          idFoyer: data.idFoyer,
          nomFoyer: data.nomFoyer,
          capaciteFoyer: data.capaciteFoyer,
        });
        console.log("welcome", this.formFoyerUpdate.value);
      },
    });
  }
  updateFoyer() {
    if (this.formFoyerUpdate.valid) {
      this._foyer_service.editFoyer(this.formFoyerUpdate.value).subscribe({
        next: (data) => {
          Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Update it!",
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "updated!",
                text: "Your file has been updated.",
                icon: "success",
              });
            }
            this.getAllFoyer();
          });
        },
        error: () => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        },
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Invalid data!",
      });
    }
  }
  resetForm() {
    this.formFoyerUpdate.reset();
  }

  // modifierFoyer() {
  //   const formData = this.formFoyerUpdate.value;
  //   const capaciteFoyerValue = formData.capaciteFoyer;
  //   const capaciteFoyer = Number(capaciteFoyerValue);
  //   const foyerr: Foyer = {
  //     idFoyer: this.idFoyer,
  //     nomFoyer: formData.nomFoyer || '',
  //     capaciteFoyer: capaciteFoyer,
  //   };
  //   this._foyer_service.editFoyer(foyerr).subscribe(
  //     (updatedFoyer) => {
  //       console.log('Foyer mis à jour avec succès:', updatedFoyer);
  //     },
  //     (error) => {
  //       console.error('Erreur lors de la mise à jour du foyer:', error);
  //     }
  //   );
  // }
}
