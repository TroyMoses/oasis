"use client";

import type React from "react";

import { useState } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import { Users, UserPlus, Shield, Trash2, Key } from "lucide-react";
import type { Id } from "@/convex/_generated/dataModel";

export default function UsersTab() {
  const users = useQuery(api.users.list) || [];
  const createUser = useMutation(api.users.create);
  const updateRole = useMutation(api.users.updateRole);
  const deleteUser = useMutation(api.users.deleteUser);
  const changePassword = useMutation(api.users.changePassword);
  const { toast } = useToast();

  const [isCreateDialogOpen, setIsCreateDialogOpen] = useState(false);
  const [isPasswordDialogOpen, setIsPasswordDialogOpen] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState<Id<"users"> | null>(
    null
  );
  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
    isAdmin: false,
  });
  const [newPassword, setNewPassword] = useState("");

  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createUser(newUser);
      toast({
        title: "User created",
        description: `User ${newUser.username} has been created successfully`,
      });
      setNewUser({ username: "", password: "", isAdmin: false });
      setIsCreateDialogOpen(false);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description:
          error instanceof Error ? error.message : "Failed to create user",
      });
    }
  };

  const handleRoleToggle = async (
    userId: Id<"users">,
    currentIsAdmin: boolean
  ) => {
    try {
      await updateRole({ userId, isAdmin: !currentIsAdmin });
      toast({
        title: "Role updated",
        description: `User role has been ${!currentIsAdmin ? "promoted to admin" : "demoted to user"}`,
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to update user role",
      });
    }
  };

  const handleDeleteUser = async (userId: Id<"users">, username: string) => {
    if (!confirm(`Are you sure you want to delete user "${username}"?`)) return;

    try {
      await deleteUser({ userId });
      toast({
        title: "User deleted",
        description: `User ${username} has been deleted`,
      });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description:
          error instanceof Error ? error.message : "Failed to delete user",
      });
    }
  };

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedUserId) return;

    try {
      await changePassword({ userId: selectedUserId, newPassword });
      toast({
        title: "Password changed",
        description: "User password has been updated successfully",
      });
      setNewPassword("");
      setSelectedUserId(null);
      setIsPasswordDialogOpen(false);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to change password",
      });
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              User Management
            </CardTitle>
            <Dialog
              open={isCreateDialogOpen}
              onOpenChange={setIsCreateDialogOpen}
            >
              <DialogTrigger asChild>
                <Button className="bg-blue-800">
                  <UserPlus className="h-4 w-4 mr-2" />
                  Add User
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Create New User</DialogTitle>
                  <DialogDescription>
                    Add a new user to the system
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleCreateUser} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="username">Username</Label>
                    <Input
                      id="username"
                      value={newUser.username}
                      onChange={(e) =>
                        setNewUser((prev) => ({
                          ...prev,
                          username: e.target.value,
                        }))
                      }
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      value={newUser.password}
                      onChange={(e) =>
                        setNewUser((prev) => ({
                          ...prev,
                          password: e.target.value,
                        }))
                      }
                      required
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Switch
                      id="isAdmin"
                      checked={newUser.isAdmin}
                      onCheckedChange={(checked) =>
                        setNewUser((prev) => ({ ...prev, isAdmin: checked }))
                      }
                    />
                    <Label htmlFor="isAdmin">Admin privileges</Label>
                  </div>
                  <Button type="submit" className="w-full">
                    Create User
                  </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {users.length === 0 ? (
              <p className="text-center text-muted-foreground py-8">
                No users found
              </p>
            ) : (
              users.map((user) => (
                <Card key={user._id} className="border-l-4 border-l-blue-500">
                  <CardContent className="p-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="font-medium">{user.username}</span>
                          <Badge
                            variant={user.isAdmin ? "default" : "secondary"}
                            className="flex items-center gap-1"
                          >
                            {user.isAdmin && <Shield className="h-3 w-3" />}
                            {user.isAdmin ? "Admin" : "User"}
                          </Badge>
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Created:{" "}
                          {format(new Date(user.createdAt), "MMM dd, yyyy")}
                        </div>
                        {user.lastLogin && (
                          <div className="text-sm text-muted-foreground">
                            Last login:{" "}
                            {format(
                              new Date(user.lastLogin),
                              "MMM dd, yyyy HH:mm"
                            )}
                          </div>
                        )}
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <Switch
                            checked={user.isAdmin}
                            onCheckedChange={() =>
                              handleRoleToggle(user._id, user.isAdmin)
                            }
                          />
                          <Label className="text-sm">Admin privileges</Label>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => {
                            setSelectedUserId(user._id);
                            setIsPasswordDialogOpen(true);
                          }}
                        >
                          <Key className="h-4 w-4 mr-2" />
                          Change Password
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() =>
                            handleDeleteUser(user._id, user.username)
                          }
                        >
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </CardContent>
      </Card>

      {/* Change Password Dialog */}
      <Dialog
        open={isPasswordDialogOpen}
        onOpenChange={setIsPasswordDialogOpen}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Change Password</DialogTitle>
            <DialogDescription>
              Enter a new password for the user
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleChangePassword} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="newPassword">New Password</Label>
              <Input
                id="newPassword"
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Change Password
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
